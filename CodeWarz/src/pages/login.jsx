import Navbar from "../components/Navbar";

function Login() {
  const fakeLogin = () => {
    alert("Authentication module will be connected with backend soon ⚔");
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "60px"
        }}
      >
        <div
          style={{
            width: "420px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(124,58,237,0.18)",
            borderRadius: "24px",
            padding: "40px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 30px rgba(124,58,237,0.08)"
          }}
        >
          <p style={{ color: "#8b9cff", letterSpacing: "3px", marginBottom: "10px", textAlign: "center" }}>
            WARRIOR AUTH PORTAL
          </p>

          <h1 style={{ textAlign: "center", marginBottom: "28px" }}>Login to CodeWarz</h1>

          <input
            type="email"
            placeholder="Enter Email"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "16px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              color: "white"
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "22px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              color: "white"
            }}
          />

          <button
            onClick={fakeLogin}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "12px",
              background: "linear-gradient(to right,#7c3aed,#2563eb)",
              color: "white",
              cursor: "pointer",
              marginBottom: "16px"
            }}
          >
            SIGN IN
          </button>

          <button
            onClick={fakeLogin}
            style={{
              width: "100%",
              padding: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              marginBottom: "18px"
            }}
          >
            CREATE ACCOUNT
          </button>

          <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: "14px" }}>or continue with</p>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
            <div style={{ padding: "10px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.03)" }}>G</div>
            <div style={{ padding: "10px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.03)" }}>in</div>
            <div style={{ padding: "10px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.03)" }}>X</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;