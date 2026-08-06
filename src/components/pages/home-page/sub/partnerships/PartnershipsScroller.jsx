



export default function PartnershipsScroller() {

  const proxy = "public/images/general/partners/"

  const partnerFiles = [
    "google-cloud-copy.png",
    "gsa-contract-holder-copy.png",
    "oracle-gold-partner.png",
    "people-soft.png",
    "sap-copy.png",
    "workday-services-partner-copy.png",
  ]


  const image1 = document.getElementById("img1");
  const image2 = document.getElementById("img2");
  const image3 = document.getElementById("img3");
  const image4 = document.getElementById("img4");
  const image5 = document.getElementById("img5");
  const image6 = document.getElementById("img6");
  // console.log(...images)
  let currentLeft = 0;
  const targetLeft = 2000;
  const speed = 5; // Pixels per frame

  function step() {
    if (currentLeft < targetLeft) {
      currentLeft += speed;

      image1.style.left = currentLeft + "px"; 
      image2.style.left = currentLeft + "px"; 
      image3.style.left = currentLeft + "px"; 
      image4.style.left = currentLeft + "px"; 
      image5.style.left = currentLeft + "px"; 
      image6.style.left = currentLeft + "px"; 

      requestAnimationFrame(step); // Keep looping
    }
  }

  // Start animation
  requestAnimationFrame(step);

  return (
    <div className="my-12" >
      {/* <button onClick={() => step()}>Step</button> */}
      <hr/>
      <img src={proxy + partnerFiles[0]} id="img1" className="partnership-image absolute p-6 w-[30vw]" />
      <img src={proxy + partnerFiles[1]} id="img2" className="partnership-image absolute p-6 w-[30vw]" />
      <img src={proxy + partnerFiles[2]} id="img3" className="partnership-image absolute p-6 w-[30vw]" />
      <img src={proxy + partnerFiles[3]} id="img4" className="partnership-image absolute p-6 w-[30vw]" />
      <img src={proxy + partnerFiles[4]} id="img5" className="partnership-image absolute p-6 w-[30vw]" />
      <img src={proxy + partnerFiles[5]} id="img6" className="partnership-image absolute p-6 w-[30vw]" />
    </div>
  )
}