import type { Metadata } from "next";

export const metadata :Metadata={
 title: 'seo contacto',
 description: 'SEO Desciption',
 keywords : ['about','contactanps','devs']

};

export default function ContactPage(){

    return(
<>
<div className="flex flex-col">

    <span className="text-center text-5xl">  pagina de contact</span>
</div>
</>

    )

}