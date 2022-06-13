import React  from 'react'
import './Contact.css'
import { VscVerified } from 'react-icons/vsc'
//Api emailjs permet de récupérer les informations du formuliare et l'envoyer dans ma boîte mail 
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router-dom'
//Api React Hook Form pour valider la saisie de l'utilisateur
import { useForm } from "react-hook-form"
//Api yup permet de définir en amont un controller pour chaque type de saisie 
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

//Validateur 
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
  name: yup.string().max(30).required("Le nom ne peut pas être vide, veuillez saisir votre nom, s'il vous plaît "),
  email : yup.string().email().required("L'adresse mail invalide. Veuillez saisir une adresse mail valide, s'il vous plaît"),
  phone: yup.string().matches(phoneRegExp, "Le numéro de téléphone invalide. Veuillez saisir un numéro de téléphone valide, s'il vous plaît").required("Un numéro de téléphone est requis"),
  message : yup.string().max(300)
}).required()


const Contact = () => {
 
  const history = useHistory()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  //Gestionnaire du formulaire
  const onSubmit = (data) => {
    //console.log(data)

    //API emailjs
    emailjs.send('service_bahpx0t', 'template_7legbyy', data, 'user_NOmEJNy2vqsT2YJhWiRJ5')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text)
       //Rediriger vers la page contactSubmit
       history.push('/')
    }, (error) =>  {
       console.log('FAILED...', error)
    })   
  } 
  

  return (
    <main>
      <div  className="containerContact">
            <div className="ContainerHeader">
                <h3 className="textTittleContact">Stay in touch</h3>
                <ul className="textDescContact">
                    <li><VscVerified/> Pragmatique</li>
                    <li><VscVerified/> Autonome</li>
                    <li><VscVerified/> Travail en équipe</li>
                </ul>
            </div> 
            <div className="containerForm">
                <section>
                    <h2>Contact</h2>
                    <form className="containerForm-form"  onSubmit={handleSubmit(onSubmit)} >
                      <input className="form-control"  placeholder="Nom et prénom" {...register("name")} />
                      <p>{errors.name?.message}</p>

                      <input className="form-control"  placeholder="Email" {...register("email")} />
                      <p>{errors.email?.message}</p>

                      <input className="form-control"  placeholder="Téléphone" {...register("phone")} />
                      <p>{errors.phone?.message}</p>

                      <textarea className="form-control" placeholder="Message" {...register("message")}></textarea>
                      <p>{errors.message?.message}</p>

                     <button type="submit" className="button-submit">Envoyer</button>
                    </form>
            </section>
            </div>             
      </div>
    </main>
    )
  }

export default Contact