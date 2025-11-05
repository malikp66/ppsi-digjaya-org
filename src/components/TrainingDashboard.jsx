"use client";
import { pelatihanOnline, jadwalLatihan, pelatihMentor, statistikPelatihan } from "@/data/training";

const SectionHeader = () => (
  <div className="section__header text-center gutter-12" data-aos="fade-up" data-aos-duration={800}>
    <span className="sub-title">Pelatihan & Pembinaan Atlet</span>
    <h2 className="title-animation" style={{ textTransform: "none", fontSize: "clamp(30px, 5vw, 48px)", lineHeight: "1.2", marginTop: "16px" }}>
      Modul latihan <span style={{ color: "var(--base-color)" }}>berjenjang</span> untuk atlet PPSI
    </h2>
  </div>
);

const OnlineTrainingList = () => (
  <section className="help-two" aria-labelledby="online-title" style={{ paddingTop: "60px" }}>
    <div className="container">
      <h5 
        id="online-title" 
        className="gutter-12" 
        data-aos="fade-up" 
        data-aos-duration={800}
        style={{ 
          fontSize: "clamp(24px, 3vw, 32px)", 
          fontWeight: "800", 
          color: "var(--secondary-color)",
          marginBottom: "40px",
          position: "relative",
          paddingBottom: "16px"
        }}
      >
        Pelatihan Online
        <span style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "80px",
          height: "4px",
          backgroundColor: "var(--base-color)",
          borderRadius: "2px"
        }}></span>
      </h5>
      <div 
        className="help-two-card-wrapper gutter-30" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "30px" 
        }}
      >
        {pelatihanOnline.map((item) => (
          <article 
            key={item.id} 
            className="help-two__card" 
            data-aos="fade-up" 
            data-aos-duration={800}
            style={{
              padding: "32px 24px",
              borderRadius: "16px",
              background: "#fff",
              border: "1px solid rgba(18, 47, 42, 0.1)",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.12)";
              e.currentTarget.style.borderColor = "var(--base-color)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.06)";
              e.currentTarget.style.borderColor = "rgba(18, 47, 42, 0.1)";
            }}
          >
            <div style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, var(--base-color) 0%, var(--quaternary-color) 100%)",
              opacity: "0.1",
              borderRadius: "50%"
            }}></div>
            
            <div className="content" style={{ position: "relative", zIndex: 1 }}>
              <h6 style={{ 
                fontSize: "20px", 
                fontWeight: "700", 
                color: "var(--secondary-color)",
                marginBottom: "12px"
              }}>
                {item.judul}
              </h6>
              <p style={{ 
                fontSize: "15px", 
                color: "var(--base-color)",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                {item.level}
              </p>
            </div>
            <div className="list" style={{ 
              paddingTop: "16px", 
              borderTop: "1px solid rgba(18, 47, 42, 0.1)",
              position: "relative",
              zIndex: 1
            }}>
              <p style={{ 
                fontSize: "14px", 
                color: "var(--template-color)",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <strong style={{ color: "var(--secondary-color)" }}>Durasi:</strong> 
                <span style={{ color: "var(--quaternary-color)" }}>{item.durasi}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const CentralScheduleList = () => (
  <section className="help-two" aria-labelledby="schedule-title" style={{ paddingTop: "80px" }}>
    <div className="container">
      <h5 
        id="schedule-title" 
        className="gutter-12" 
        data-aos="fade-up" 
        data-aos-duration={800}
        style={{ 
          fontSize: "clamp(24px, 3vw, 32px)", 
          fontWeight: "800", 
          color: "var(--secondary-color)",
          marginBottom: "40px",
          position: "relative",
          paddingBottom: "16px"
        }}
      >
        Jadwal Latihan Terpusat
        <span style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "80px",
          height: "4px",
          backgroundColor: "var(--base-color)",
          borderRadius: "2px"
        }}></span>
      </h5>
      <div 
        className="help-two-card-wrapper gutter-30"
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px" 
        }}
      >
        {jadwalLatihan.map((item) => (
          <article 
            key={item.id} 
            className="help-two__card" 
            data-aos="fade-up" 
            data-aos-duration={800}
            style={{
              padding: "32px 24px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, var(--quaternary-color) 0%, var(--secondary-color) 100%)",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.12)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.12)";
            }}
          >
            <div style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "150px",
              height: "150px",
              background: "rgba(251, 173, 23, 0.15)",
              borderRadius: "50%"
            }}></div>
            
            <div className="content" style={{ position: "relative", zIndex: 1 }}>
              <h6 style={{ 
                fontSize: "24px", 
                fontWeight: "800", 
                color: "black",
                marginBottom: "8px"
              }}>
                {item.hari}
              </h6>
              <p style={{ 
                fontSize: "16px", 
                color: "var(--base-color)",
                fontWeight: "600",
                marginBottom: "20px"
              }}>
                {item.waktu}
              </p>
            </div>
            <div className="list" style={{ 
              paddingTop: "20px", 
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              position: "relative",
              zIndex: 1
            }}>
              <p style={{ 
                fontSize: "14px", 
                color: "black",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <strong style={{ color: "black" }}>📍 Lokasi:</strong> {item.lokasi}
              </p>
              <p style={{ 
                fontSize: "14px", 
                color: "black",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <strong style={{ color: "black" }}>👤 Pelatih:</strong> {item.pelatih}
              </p>
              <p style={{ 
                fontSize: "14px", 
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <strong style={{ color: "black" }}>👥 Kuota:</strong> {item.kuota}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const MentorGrid = () => (
  <section className="team" aria-labelledby="mentor-title" style={{ paddingTop: "80px" }}>
    <div className="container">
      <h5 
        id="mentor-title" 
        className="gutter-12" 
        data-aos="fade-up" 
        data-aos-duration={800}
        style={{ 
          fontSize: "clamp(24px, 3vw, 32px)", 
          fontWeight: "800", 
          color: "var(--secondary-color)",
          marginBottom: "40px",
          position: "relative",
          paddingBottom: "16px"
        }}
      >
        Pelatih & Mentor
        <span style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "80px",
          height: "4px",
          backgroundColor: "var(--base-color)",
          borderRadius: "2px"
        }}></span>
      </h5>
      <div 
        className="gutter-30"
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "30px" 
        }}
      >
        {pelatihMentor.map((pelatih) => (
          <article 
            key={pelatih.id} 
            className="team__single" 
            data-aos="fade-up" 
            data-aos-duration={800}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease"
            }}
          >
            <div style={{
              height: "8px",
              background: "linear-gradient(90deg, var(--base-color) 0%, var(--quaternary-color) 100%)"
            }}></div>
            
            <div className="team__single-content" style={{ padding: "32px 24px" }}>
              <h6 style={{ 
                fontSize: "20px", 
                fontWeight: "800", 
                color: "var(--secondary-color)",
                marginBottom: "8px"
              }}>
                {pelatih.nama}
              </h6>
              <p style={{ 
                fontSize: "15px", 
                color: "var(--base-color)",
                fontWeight: "600",
                marginBottom: "20px"
              }}>
                {pelatih.perguruan}
              </p>
              <ul className="list" style={{ 
                listStyle: "none", 
                padding: 0,
                margin: 0 
              }}>
                <li style={{ 
                  fontSize: "14px", 
                  color: "var(--template-color)",
                  marginBottom: "12px",
                  paddingLeft: "24px",
                  position: "relative"
                }}>
                  <span style={{
                    position: "absolute",
                    left: "0",
                    top: "4px",
                    width: "16px",
                    height: "16px",
                    background: "var(--base-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "#fff"
                  }}>✓</span>
                  <strong style={{ color: "var(--secondary-color)" }}>Spesialisasi:</strong> {pelatih.spesialisasi}
                </li>
                <li style={{ 
                  fontSize: "14px", 
                  color: "var(--template-color)",
                  paddingLeft: "24px",
                  position: "relative"
                }}>
                  <span style={{
                    position: "absolute",
                    left: "0",
                    top: "4px",
                    width: "16px",
                    height: "16px",
                    background: "var(--quaternary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "#fff"
                  }}>🏆</span>
                  <strong style={{ color: "var(--secondary-color)" }}>Sertifikasi:</strong> {pelatih.sertifikasi}
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const StatsBoard = () => (
  <section className="counter" aria-labelledby="stats-title" style={{ paddingTop: "80px" }}>
    <div className="container">
      <h5 
        id="stats-title" 
        className="gutter-12" 
        data-aos="fade-up" 
        data-aos-duration={800}
        style={{ 
          fontSize: "clamp(24px, 3vw, 32px)", 
          fontWeight: "800", 
          color: "var(--secondary-color)",
          marginBottom: "40px",
          textAlign: "center",
          position: "relative",
          paddingBottom: "16px"
        }}
      >
        Dashboard Kinerja
        <span style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "var(--base-color)",
          borderRadius: "2px"
        }}></span>
      </h5>
      <div 
        className="counter__inner"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          marginTop: "40px"
        }}
      >
        {statistikPelatihan.map((item, index) => (
          <article 
            key={item.label} 
            className="counter__single" 
            data-aos="fade-up" 
            data-aos-duration={800}
            data-aos-delay={index * 100}
            style={{
              padding: "40px 24px",
              borderRadius: "20px",
              background: index % 2 === 0 
                ? "linear-gradient(135deg, var(--base-color) 0%, #ffdb4d 100%)"
                : "linear-gradient(135deg, var(--quaternary-color) 0%, var(--secondary-color) 100%)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "150px",
              height: "150px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%"
            }}></div>
            
            <h2 style={{ 
              fontSize: "clamp(36px, 5vw, 56px)", 
              fontWeight: "800",
              color: index % 2 === 0 ? "var(--secondary-color)" : "white",
              marginBottom: "12px",
              position: "relative",
              zIndex: 1
            }}>
              {item.value}
            </h2>
            <h5 style={{ 
              fontSize: "16px", 
              fontWeight: "600",
              color: index % 2 === 0 ? "var(--secondary-color)" : "var(--base-color)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              position: "relative",
              zIndex: 1
            }}>
              {item.label}
            </h5>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const TrainingDashboard = () => {
  return (
    <section 
      className="volunteer" 
      data-aos="fade-up" 
      data-aos-duration={800}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Decoration */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(251, 173, 23, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 0
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: "-150px",
        left: "-150px",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(4, 106, 88, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeader />
        <div className="gutter-40">
          <StatsBoard />
          <OnlineTrainingList />
          <CentralScheduleList />
          <MentorGrid />
        </div>
      </div>
    </section>
  );
};

export default TrainingDashboard;