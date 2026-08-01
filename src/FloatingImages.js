const images = [
  { src: "/ssd.png", top: "8%", left: "12%", size: "70px", duration: "9s", delay: "0s" },
  { src: "/sdf.jpg", top: "15%", left: "78%", size: "80px", duration: "11s", delay: "1s" },
  { src: "/download.png", top: "70%", left: "8%", size: "90px", duration: "10s", delay: "2s" },
  { src: "/cu.jpg", top: "60%", left: "85%", size: "65px", duration: "8s", delay: "0.5s" },
  { src: "/cutt.jpg", top: "40%", left: "5%", size: "75px", duration: "12s", delay: "1.5s" },
  { src: "/ut.jpg", top: "82%", left: "70%", size: "70px", duration: "9.5s", delay: "2.5s" },
];

function FloatingImages() {
  return (
    <div className="floating-images">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt=""
          className="floating-img"
          style={{
            top: img.top,
            left: img.left,
            width: img.size,
            animationDuration: img.duration,
            animationDelay: img.delay,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingImages;
