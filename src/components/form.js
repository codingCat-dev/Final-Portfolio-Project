import React from "react"
import useForm from "../utils/useForm"

const Form = () => {
  const [values, onChange, onSubmit] = useForm()

  // const onSubmit = ev => {
  //   ev.preventDefault()
  //   console.log(values)
  // }

  return (
    <>
      {/* prettier-ignore */}
      <form onSubmit={onSubmit} className="text-center ">
        <div className="px-2 mx-auto my-6 font-light lg:w-2/3">
          <label htmlFor="firstname" className="block my-2">
            Začneme tím prvním, jak se jmenuješ? &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="block w-full px-4 py-3 font-light leading-tight border rounded-md appearance-none focus:outline-none border-slate-700 focus:bg-gray-50"
            type="text"
            required
            minLength={6}
            maxLength={20}
            name="firstname"
            value={values.firstname || ""}
            onChange={onChange}
          />
        </div>
        <div className="px-2 mx-auto my-6 font-light lg:w-2/3">
          <label htmlFor="eventdate" className="block my-2">
            Jaký den je vaše událost? &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="block w-full px-4 py-3 font-light leading-tight border rounded-md appearance-none focus:outline-none border-slate-700 focus:bg-gray-50"
            type="date"
            required
            name="eventdate"
            value={values.eventdate || ""}
            onChange={onChange}
          />
        </div>
        <div className="px-2 mx-auto my-6 font-light lg:w-2/3">
          <label htmlFor="eventplace" className="block my-2">
            Kde se bude konat událost ? &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="block w-full px-4 py-3 font-light leading-tight border rounded-md appearance-none focus:outline-none border-slate-700 focus:bg-gray-50"
            type="text"
            required
            minLength={5}
            maxLength={50}
            name="eventplace"
            value={values.eventplace || ""}
            onChange={onChange}
          />
        </div>
        <div className="px-2 mx-auto my-6 font-light lg:w-2/3">
          <label htmlFor="eventinformation" className="block my-2">
            Řekni mi něco o své události a co si myslíš, že bych měla vědět
            &nbsp;<small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="block w-full px-4 py-3 font-light leading-tight border rounded-md appearance-none focus:outline-none border-slate-700 focus:bg-gray-50"
            type="text"
            required
            minLength={10}
            maxLength={100}
            name="eventinformation"
            value={values.eventinformation || ""}
            onChange={onChange}
          />
          <small className="block text-gray-500">
            Vaši představu, zda je akce přes den, nebo odpoledne nebo přibližný
            počet hostů
          </small>
        </div>
        <div className="px-2 mx-auto my-6 font-light lg:w-2/3">
          <label htmlFor="email" className="block my-2">
            Na jaký e-mail vám mohu zaslat všechny informace &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="block w-full px-4 py-3 font-light leading-tight border rounded-md appearance-none focus:outline-none border-slate-700 focus:bg-gray-50"
            type="email"
            required
            minLength={6}
            maxLength={30}
            name="email"
            value={values.email || ""}
            onChange={onChange}
          />
        </div>
        <div className="px-2 mx-auto my-6 font-light lg:w-2/3">
          <label htmlFor="phone" className="block my-2">
            Můžete mi nechat telefonní číslo ?&nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="block w-full px-4 py-3 font-light leading-tight border rounded-md appearance-none focus:outline-none border-slate-700 focus:bg-gray-50"
            type="text"
            required
            name="phone"
            minLength={7}
            maxLength={15}
            value={values.phone||''}
            placeholder='+420'
            onChange={onChange}
          />
        </div>
        <div className="px-2 mx-auto my-6 font-light lg:w-2/3">
          <label htmlFor="memories" className="block my-2">
            A od 1 do 10, jakou hodnotu pro vás mají vzpomínky &nbsp;
            <small className="block text-gray-500">Požadované</small>
          </label>
          <input
            className="block w-full px-4 py-3 font-light leading-tight border rounded-md appearance-none focus:outline-none border-slate-700 focus:bg-gray-50"
            type="number"
            minLength={1}
            maxLength={10}
            required
            name="memories"
            value={values.memories || ""}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center px-2 mx-auto my-6 font-light lg:w-2/3 lg:flex-row">
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
            className="w-4 h-4 focus:outline-none "
            type="checkbox"
            required
            name="privacy"
            checked={values.privacy || ""}
            onChange={onChange}
          />
        </div>
        <div className="my-10 ">
          <button className="px-12 py-1 uppercase border border-slate-700">
            Odeslat
          </button>
        </div>
      </form>
    </>
  )
}
export default Form
