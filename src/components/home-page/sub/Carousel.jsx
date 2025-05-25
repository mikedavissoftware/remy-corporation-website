
import ServiceCard from "./ServiceCard"


export default function Carousel() {



  return (
    <div className="carousel carousel-center rounded-box m-12">
      <div className="carousel-item">
        <div className="w-48 text-center">
          <p>atyyy</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="w-48 text-center">
          <p>atyyy</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="w-48 text-center">
          <p>atyyy</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="p-8">
          <ServiceCard />
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt="Pizza" />
      </div>
    </div>
  )
}