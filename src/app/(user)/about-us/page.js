"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

export default function AboutMehraz() {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const images = [
    "https://s3-alpha-sig.figma.com/img/3cab/a905/048165d080aaaafd283f949c48c43b7d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y5ZZ94fvf6gHg1194GZPsSYa1XBzcYyZ54ZWfHesZUjunt2Qvv7WO6J-c77GCApIbVUJlqC3QzEzVvRC2rUeEyk3H3BSrLW8vGsgHVyzxpyTdrCekJY~j08R15KQSsW1OolyAnJS~cnMYPlR1AkL578-FTVG9OeUFwxro~zRge9kYVHJkSIgHKGPaBTgyEgbR9lgByI97bsqJWtF50YTIADOlo5C6YwsJI~R~UjxVO7jSTVL2jxuls90UCfoJoKGAYcObkdSEGL9FB6DAvfmO6FUyu2r8SO79VQUpfhU~cR9mX85nvVAOqT-gDnUfz08rM09aTJm5INv31WseUUqnA__",
    "https://s3-alpha-sig.figma.com/img/6e68/ca71/98d426f4a9b1a919bcde6b2a0d5c05a7?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z-f70OJEro-GJs9rq5priLPW0W1gTV3qYg2ayp03TN1UjJx5Y9IrefwrVnsYKEDQZyGAF-Gj2-PKWEWQxAgCzviU3cAccdjfUHrqiosWhc23S~JnXyTK1FhZC-L5wP3oDJk6hX-iktq14~I4gntZvDi2U2EvUjyeg5UHcsy2RGP7Nb5xZ7H6Zv~bK4su8LlbY8wzP14ioueJvWqZyNEbFjw3RnNrJOzajvxVvQmfmQeeQ19IYBgTFDwSrhXD5byq5Ka5MaTnnm6He9DtsCgOhvtq8Lde-Tsjs56OI8yQjw0GUDwZ6F7CJ9d5dFY9o~GSrZ6xe3-GYqP-Rllq4P2rjg__",
    "https://s3-alpha-sig.figma.com/img/1798/43a9/f373bea0f89de2ec1ac6332e11427ccb?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vj07xDjoT4yKmoE8W~9bRd7uAQwTnZGzIF9~NEdO1dcOPGaB380rt5rltpatsP1gxhw3K9tiZVNKBhSa4wMD13K7IQqbAiMCtFnZWMYvRRNx63r8HgZtk86ZiAAG3QyK7twk4J9R374r71ieGGBbgaJPYVgpmp9PJHEoGpGYea67HABL1BMrDO5BoiKVYF-n6e9eP-Rh8sz8YiC-q7IHmwE8hOg8JzZ-UMlqxFIzI8HuEhXEuEk7~YL-49vZTuIOY1KbCL4W0SsVAtdDW7qBReKv0mMIKjxgYitPqJg2UytlUeFTfUG3lR4M8vPLKxLBzwQkzo4TmSFu3P5grgLVXw__",
    "https://s3-alpha-sig.figma.com/img/2285/263d/975c4e1926a42317720abeac812dc2cb?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D5SBRK0ZMSn-E9RETVX3viT3aeNnYEy4i4s9b2CGJmN8fsc0gAMz5PhdoJPqX2QoKRxoJB~silk0hDK~~NLVVRlvMh3V9eaRqiUGSzVLqcAhuN8TJv4Ln0J7vNwHmJUigySjsNv-EWvmRjlTM16dOfj8KXefXq34VvKOII-ju7RXPXOlgonGShgJ0eXWt02porZRrbAbRnkHPX1ilU8Tdco3U~FWBpJbHLb8jT7tEOVoM3cjrbx0axtMJOhVQH7yyIxCaUGYssAv866UbozrqocFDNEtd6NTSm-E6AjNy0DJH~VhJV733w4yB5bvTvK6xAHoO0O9MLI7j1GUbmK13w__",
  ];

  const affiliations = Array(4).fill("CLIMATE FINANCE PK");
  const services = [
    "ARCHITECTURE & PLANNING",
    "INTERIOR DESIGN",
    "CONSTRUCTION SERVICES",
  ];

  const serviceImages = [
    "https://s3-alpha-sig.figma.com/img/7e78/ce2a/1ef5f5c26bc48b14beefcb0909570762?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aekm7OBJmQt-W84ibp9po1jiMQOCZcxbUg4jsEMpM0Ii9Ec40iU3zTUa3uxHhwe1k1cVkvTDfIb628fp~EHB9Z5I3OW9t8DDupUEeTt4YrG6SKkonRM96O5JzGtFm~YNGrPwYGdmG22tq8Ppv2ZdzW-SIrrSbCNc4IM4Vi-FzrnyBRbNwe0Jmf8p-HctpIi4uFODyD0zgWMQTMzaD7rEMtvrTBSChRtREFNxkdVL-Jx4mlsuqTy1qSPvpWrxnDlRFDyJXaaSavlv2FZlInGitYxtGe--Fq62IikVmM5i2aSO7omHv3Np9KaZ5waa8LgVLuhg0ePrRcNDsvxXJgR68A__",
    "https://s3-alpha-sig.figma.com/img/3d78/d82a/75da75a1a9bb0aa2a392bce6c4d6f035?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WqpHXTioa8zG8bM2naTG~EuBErOLeVhjQC0nl2ERXrYP3ikh2IvV~1CwSDsoqMxWxaasUMqXjyGYSMnQpE3UApo5BXAJvut-8eKaSeQrDZZztvjeb4ZgDhccIR1ZS0P4JnJ-yM1bwawmkdsYOfiPMlQ4-O0to-kqP7tI7IayCXAgtiIqTVW3Y25MMbUEjmrLY4cx6BaLbxPwJ6eFe1sgTMMrgrG4AhnKFcufIacYAegBhlLtrCDFXVuOIq1B9qavXjYyTDqb-qBpzORMlKdFwSO21FXvHtME0LBjOtAoD0QIBy6SmtL~BjiTrSj1K08P68mafw3-EzKvhKXTgWQoZw__",
    "https://s3-alpha-sig.figma.com/img/d1d9/7b82/76de44fcfb026298838899878db7f848?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VFiBnW0I8pNbxyZQlQB-ZbUHWAbxt0sGs~cFmm3TdgJq28kgLb42JMdqJlbq~3FPjodJV9r7s-Ly66nf~RmiFZspjbTDhJ5jK33tZvqJqDWWqIGu2N8nQufoYxtokAKpWDffhjFOpDI6m4ENXQZ7En0fNv1m7OeSLGS4iI7H-l5MUuibW3qOSK3EbEx6fuB9PZItlVZe-p8fUIqxK6B1JCQivjLdA6yq7vBWK1wlMspSWZoxFKz5WDrNXkuPnTEV9lT3eFxlvBcu-ZXBbqtgYOsX7KqXaw3pqfvNDCJBWLE5Ya7afd3fcn8SHTA8HIz-z38LjTq~gLAqyMrX7lfVgQ__",
  ];

  const nextMainImage = () => {
    setMainImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="relative mflg:px-5 mfxl:container mx-auto py-8">
        <h1 className="text-4xl text-gray-800 mb-4 text-center">
          ABOUT <strong>MEHRAZ</strong>
        </h1>

        <div className="border-b-2 w-full border-gray-300 pb-4">
          <div className="flex mfxs:flex-col-reverse gap-y-8 mflg:flex-row mflg:gap-x-8 mfxs:items-start mflg:justify-between w-full pt-10 px-3 sm:px-5">
            {/* Image Section */}
            <div className="mfxs:w-full mflg:w-[45%]">
              <Image
                src={images[mainImageIndex]}
                alt="Building"
                width={100}
                height={100}
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="flex flex-nowrap overflow-x-auto scrollbar-hide space-x-4 mt-6 relative">
                <div className="flex space-x-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg cursor-pointer border-2 overflow-hidden ${
                        index === mainImageIndex
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => setMainImageIndex(index)}>
                      <Image
                        src={img}
                        alt="Thumbnail"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex-shrink-0 flex items-center ml-4">
                  <AiOutlineRight
                    className="text-2xl font-bold text-gray-500 cursor-pointer bg-white rounded-full h-14 w-14 flex items-center justify-center p-2 border-2 border-gray-300 hover:border-dashed"
                    onClick={nextMainImage}
                  />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="mfxs:w-full mflg:w-[45%] mt-8 mfxs:mt-0 mflg:mt-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-0">
                Build Your Dream.
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
                Shape the Future.
              </h1>
              <p className="text-gray-600 text-justify">
                At Mehraz, we are transforming the way architecture and
                construction come to life. By combining innovation with seamless
                digital solutions, we make designing and building your dream
                space easier, smarter, and more accessible. Whether it’s
                crafting modern homes, designing stunning interiors, or managing
                full-scale construction, Mehraz ensures efficiency,
                transparency, and excellence in every project.
                <br />
                With a commitment to quality and a vision for the future, we
                empower you to bring your ideas to reality—effortlessly and with
                confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Affiliations and Services Container */}
        <div className="flex mfxs:flex-col-reverse mflg:flex-row mflg:gap-x-8 mfxs:items-start mflg:justify-between w-full pt-10 px-3 sm:px-5 gap-y-8">
          {/* Affiliations */}
          <div className="w-full mflg:w-[45%] relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
              Affiliations ({affiliations.length})
            </h3>
            <div className="flex justify-start items-center gap-4 relative flex-wrap">
              {affiliations.map((affiliation, index) => (
                <div
                  key={index}
                  className="flex flex-col cursor-pointer items-center justify-center px-3">
                  <Image
                    src="/images/climate.png"
                    alt={affiliation}
                    width={100}
                    height={100}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                  <p className="text-sm font-medium text-gray-700 text-center mt-2">
                    Climate <br /> Finance PK
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="w-full mflg:w-[45%] relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
              Services
            </h3>
            <div className="flex justify-between items-center gap-4 relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative h-[150px] w-[30%] rounded-lg overflow-hidden group">
                  <Image
                    src={serviceImages[index]}
                    alt={service}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300">
                    <div className="h-full w-full flex items-center justify-center">
                      <p className="text-sm sm:text-base font-semibold text-white text-center px-2">
                        {service}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
