import React from "react"
import useForm from "../utils/useForm"

const Form = () => {
  const [values, onChange] = useForm()

  const onSubmit = ev => {
    ev.preventDefault()
    console.log(values)
  }

  return (
    <>
      <form onSubmit={onSubmit} className="text-center">
        <div className=" border-t-2 border-gray-50 my-12 " />
        <div className="my-6 mx-auto px-2 lg:w-2/3 font-light">
          <label className="block my-2">
            Začneme tím prvním, jak se jmenuješ? &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="appearance-none block w-full  bg-blue-50  font-light py-3 px-4  leading-tight focus:outline-none focus:bg-gray-50"
            type="text"
            required
            name="firstname"
            value={values.firstname || ""}
            onChange={onChange}
          />
        </div>
        <div className=" my-6 mx-auto px-2 lg:w-2/3 font-light">
          <label className="block my-2">
            Jaký den je vaše událost? &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="appearance-none block w-full  bg-blue-50  font-light py-3 px-4  leading-tight focus:outline-none focus:bg-gray-50"
            type="text"
            required
            name="eventdate"
            value={values.eventdate || ""}
            onChange={onChange}
          />
        </div>
        <div className=" my-6 mx-auto px-2 lg:w-2/3 font-light">
          <label className="block my-2">
            Kde se bude konat událost ? &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="appearance-none block w-full  bg-blue-50  font-light py-3 px-4  leading-tight focus:outline-none focus:bg-gray-50"
            type="text"
            required
            name="eventplace"
            value={values.eventplace || ""}
            onChange={onChange}
          />
        </div>
        <div className=" my-6 mx-auto px-2 lg:w-2/3 font-light">
          <label className="block my-2">
            Řekni mi něco o své události a co si myslíš, že bych měl vědět
            &nbsp;<small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="appearance-none block w-full  bg-blue-50  font-light py-3 px-4  leading-tight focus:outline-none focus:bg-gray-50"
            type="text"
            required
            name="eventinformation"
            value={values.eventinformation || ""}
            onChange={onChange}
          />
          <small className="block text-gray-500">
            Vaši představu, zda je akce přes den, nebo odpoledne nebo přibližný
            počet hostů
          </small>
        </div>
        <div className=" my-6 mx-auto px-2 lg:w-2/3 font-light">
          <label className="block my-2">
            Na jaký e-mail vám mohu zaslat všechny informace &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="appearance-none block w-full  bg-blue-50  font-light py-3 px-4  leading-tight focus:outline-none focus:bg-gray-50"
            type="email"
            required
            name="email"
            value={values.email || ""}
            onChange={onChange}
          />
        </div>
        <div className=" my-6 mx-auto px-2 lg:w-2/3 font-light">
          <label className="block my-2">
            Můžete mi nechat telefonní číslo &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="appearance-none block w-full  bg-blue-50  font-light py-3 px-4  leading-tight focus:outline-none focus:bg-gray-50"
            type="text"
            required
            name="phone"
            value={values.phone || ""}
            onChange={onChange}
          />
        </div>
        <div className=" my-6 mx-auto px-2 lg:w-2/3 font-light">
          <label className="block my-2">
            A od 1 do 10, jakou hodnotu pro vás mají vzpomínky &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="appearance-none block w-full  bg-blue-50  font-light py-3 px-4  leading-tight focus:outline-none focus:bg-gray-50"
            type="text"
            min="1"
            max="10"
            required
            name="memories"
            value={values.memories || ""}
            onChange={onChange}
          />
        </div>
        <div className=" my-6 mx-auto px-2 lg:w-2/3 font-light flex items-center justify-center flex-col lg:flex-row">
          <label className="mx-2 my-2">
            Přečetl jsem a{" "}
            <a
              className="text-gray-500"
              href="/privacy"
              target="_blank"
              rel="noreferrer"
            >
              přijímám zásady ochrany osobních údajů
            </a>
          </label>
          <input
            className="w-4 h-4 focus:outline-none  "
            type="checkbox"
            required
            name="privacy"
            checked={values.privacy || ""}
            onChange={onChange}
          />
        </div>
        <div className=" my-10">
          <button className="bg-gradient-to-t uppercase from-gray-800 via-gray-900 to-black text-gray-100 px-12 py-1">
            Odeslat
          </button>
        </div>
      </form>
    </>
  )
}
export default Form
