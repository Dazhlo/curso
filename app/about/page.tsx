import type { Metadata } from "next";

export const metadata :Metadata={
 title: 'seo title',
 description: 'SEO Desciption',
 keywords : ['about','medidores','devs']

};


export default function AboutPage(){

return(
    <>
      <div className="flex flex-col">
  <span className="text-center text-5xl"> pagina de about</span>

      </div>
    </>
)

}