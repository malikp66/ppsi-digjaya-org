import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const REALM = 'Private Site';
const encoder = new TextEncoder();

const unauthorizedResponse = () =>
  new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}"`,
    },
  });

const missingEnvResponse = () =>
  new NextResponse(
    'BASIC_AUTH_USER and BASIC_AUTH_PASS environment variables must be set.',
    {
      status: 500,
    },
  );

const constantTimeEquals = (a: string, b: string) => {
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);

  if (aBytes.length !== bBytes.length) {
    return false;
  }

  let mismatch = 0;
  for (let i = 0; i < aBytes.length; i += 1) {
    mismatch |= aBytes[i] ^ bBytes[i];
  }

  return mismatch === 0;
};

export function middleware(request: NextRequest) {
  const username = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASS;

  if (!username || !password) {
    return missingEnvResponse();
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader) {
    return unauthorizedResponse();
  }

  const [scheme, encoded] = authHeader.split(' ');
  if (!encoded || scheme.toLowerCase() !== 'basic') {
    return unauthorizedResponse();
  }

  let decoded: string;
  try {
    decoded = atob(encoded);
  } catch {
    return unauthorizedResponse();
  }

  const separatorIndex = decoded.indexOf(':');
  if (separatorIndex < 0) {
    return unauthorizedResponse();
  }

  const providedUser = decoded.slice(0, separatorIndex);
  const providedPass = decoded.slice(separatorIndex + 1);

  const userMatches = constantTimeEquals(providedUser, username);
  const passMatches = constantTimeEquals(providedPass, password);

  if (userMatches && passMatches) {
    return NextResponse.next();
  }

  return unauthorizedResponse();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
};
