/**
 * SectionBlurBackdrop
 * Renders hardware-accelerated ambient glowing blur orbs behind section content.
 * Has zero impact on layout or pointer events.
 */
const SectionBlurBackdrop = ({
  variant = "default", // "default" | "reverse" | "center" | "accent-focus"
  className = "",
}) => {
  return (
    <div className={`section-blur-backdrop ${className}`} aria-hidden="true">
      {variant === "default" && (
        <>
          <div
            className="ambient-blur-orb orb-primary"
            style={{
              top: "-40px",
              left: "5%",
              width: "420px",
              height: "420px",
            }}
          />
          <div
            className="ambient-blur-orb orb-accent"
            style={{
              bottom: "10%",
              right: "8%",
              width: "380px",
              height: "380px",
              animationDelay: "-5s",
            }}
          />
          <div
            className="ambient-blur-orb orb-cyan"
            style={{
              top: "40%",
              right: "25%",
              width: "280px",
              height: "280px",
              animationDelay: "-9s",
              opacity: 0.35,
            }}
          />
        </>
      )}

      {variant === "reverse" && (
        <>
          <div
            className="ambient-blur-orb orb-accent"
            style={{
              top: "10%",
              left: "8%",
              width: "400px",
              height: "400px",
              animationDelay: "-3s",
            }}
          />
          <div
            className="ambient-blur-orb orb-primary"
            style={{
              bottom: "5%",
              right: "5%",
              width: "440px",
              height: "440px",
              animationDelay: "-7s",
            }}
          />
        </>
      )}

      {variant === "center" && (
        <>
          <div
            className="ambient-blur-orb orb-primary"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "550px",
              height: "400px",
              animationDelay: "-2s",
            }}
          />
          <div
            className="ambient-blur-orb orb-accent"
            style={{
              top: "20%",
              right: "15%",
              width: "320px",
              height: "320px",
              animationDelay: "-6s",
            }}
          />
        </>
      )}

      {variant === "accent-focus" && (
        <>
          <div
            className="ambient-blur-orb orb-accent"
            style={{
              top: "15%",
              right: "12%",
              width: "450px",
              height: "450px",
              animationDelay: "-4s",
            }}
          />
          <div
            className="ambient-blur-orb orb-primary"
            style={{
              bottom: "10%",
              left: "10%",
              width: "360px",
              height: "360px",
              animationDelay: "-8s",
            }}
          />
        </>
      )}
    </div>
  );
};

export default SectionBlurBackdrop;
