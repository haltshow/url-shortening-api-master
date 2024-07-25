import Header from "@/components/Header"
import Image from 'next/image'
import ilustration from '/public/illustration-working.svg' 
import bg_boost_desktop from '/public/bg-boost-desktop.svg'
import bg_shorten_boost_desktop from '/public/bg-shorten-desktop.svg'
import graph_icon from "/public/icon-brand-recognition.svg"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="text-lg text-very_dark_blue flex flex-col items-center">
      <Header /> 

      <main className="flex flex-col items-center justify-between w-full relative">
        <section className="flex justify-between items-center w-full py-16 px-96 my-16">
          <div>
            <h1 className="text-5xl font-bold">
              More than just <br/> 
              shorter links
            </h1>
            <p className="text-gray mb-8"> 
              Build your brand's recognition and get detailed <br />
              insightsd on how your links are performing
            </p>
            <button className="bg-cyan py-3 px-12 text-base rounded-full text-blue-50">
              Get Started
            </button>
          </div>

          <Image src={ilustration} alt="Illustration of a woman working" />
        </section>

        <section className="relative flex flex-col justify-center items-center bg-bg_color w-full py-16 px-96">
          <div className="absolute top-0 translate-y-[-50%]">
            <div className="w-full flex justify-center items-center py-16 px-96 relative">
              <div className="absolute -z-10">
                <Image src={bg_shorten_boost_desktop} className="bg-dark_violet object-cover rounded-lg" alt="Background Boost" />
              </div>
              <div className="flex justify-center items-center gap-4">
                <input className="p-2 rounded-lg text-base w-[720px]" type="text" placeholder="Shorten a link here..." />
                <button className="bg-cyan py-2 px-8 text-base rounded-md text-blue-50">
                  Shorten it!
                </button>
              </div>
            </div>
          </div>

          <div className="pb-16 mt-32">
            <h2 className="text-3xl font-bold">
              Advanced Statistics
            </h2>
            <p className="text-gray mb-8">
              Track how your links are performing across the web with <br /> 
              our advanced statistics dashboard.
            </p>
          </div>

          <div className="flex justify-center items-stretch p-2 h-[400px]">
            <div className="w-[420px] self-start rounded-md bg-white p-8 relative h-[300px]">
              <div className="bg-dark_violet p-5 rounded-full absolute translate-y-[-90%]">
                <Image src={graph_icon} alt="Graph Icon" />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4"> Brand Recognition </h3>
                <p className="text-gray mb-8">
                  Boost your brand recognition with
                  each click. Geneic links don't mean a
                  thing. Branded links help instil
                  confidence in your content.
                </p>
              </div>
            </div>

            <div className="bg-cyan w-6 h-2 self-center"></div>

            <div className="w-[420px] self-center rounded-md bg-white p-8 relative h-[300px]">
              <div className="bg-dark_violet p-5 rounded-full absolute translate-y-[-90%]">
                <Image src={graph_icon} alt="Graph Icon" />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4"> Brand Recognition </h3>
                <p className="text-gray mb-8">
                  Boost your brand recognition with
                  each click. Geneic links don't mean a
                  thing. Branded links help instil
                  confidence in your content.
                </p>
              </div>
            </div>

            <div className="bg-cyan w-6 h-2 self-center"></div>

            <div className="w-[420px] self-end rounded-md bg-white p-8 relative h-[300px]">
              <div className="bg-dark_violet p-5 rounded-full absolute translate-y-[-90%]">
                <Image src={graph_icon} alt="Graph Icon" />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4"> Brand Recognition </h3>
                <p className="text-gray mb-8">
                  Boost your brand recognition with
                  each click. Geneic links don't mean a
                  thing. Branded links help instil
                  confidence in your content.
                </p>
              </div>
            </div>
          </div>

        </section>

        <section className="w-full flex justify-center items-center relative h-64">
          <div className="absolute -z-10 w-full">
            <Image src={bg_boost_desktop} className="bg-dark_violet w-full h-64" alt="Background Boost" />
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="text-white font-bold text-4xl"> Boost you links today </h1>
            <button className="bg-cyan py-2 px-8 text-base rounded-full text-blue-50">
              Get Started
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
