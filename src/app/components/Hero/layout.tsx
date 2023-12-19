import Design from "@/app/assets/Design.png";

export default function Hero() {
  return (
    <>
      <div className="bg-custom-background-image bg-cover bg-center w-screen h-80" style={{ backgroundImage: `url(${Design})` }}>This Image</div>
    </>
  )
}
