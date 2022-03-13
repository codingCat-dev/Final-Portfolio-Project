import React, { lazy, Suspense, useState } from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Link } from "gatsby"

const Weddings = lazy(() => import("../components/imageQuery/weddings"))
const Portraits = lazy(() => import("../components/imageQuery/portraits"))
const Family = lazy(() => import("../components/imageQuery/family"))
const Nature = lazy(() => import("../components/imageQuery/nature"))

const Portfolio = () => {
  const [state, setState] = useState("wedding")
  //prettier-ignore
  return (
    <Layout>
      <Header title="Moja práce" />   
      <div className="flex justify-evenly my-10 font-light font-noto text-sm flex-wrap">
        <button onKeyPress={() => setState('wedding')} onClick={() => setState("wedding")}>Svatby</button>
        <button onKeyPress={() => setState('nature')} onClick={() => setState("nature")}>Příroda</button>
        <button onKeyPress={() => setState('portraits')} onClick={() => setState("portraits")}>Portreti</button>
        <button onKeyPress={() => setState('family')} onClick={() => setState("family")}>Rodině</button>
        <button onKeyPress={() => setState('all')} onClick={() => setState("all")}>Všechny</button>
      </div>

      <Suspense fallback={<div className="font-light text-2xl">...Načítám</div>}>
        {state === "wedding" && <Weddings />} 
        {state === "portraits" && <Portraits />}
        {state === "family" && <Family />}
        {state === "nature" && <Nature />}
        {state === "all" && (
          <>
            <Weddings />
            <Family />
            <Portraits />
            <Nature />
          </>
        )}
      </Suspense>      
      <div className="mb-24 mt-16 text-center">
        <Link to="/contact" className="px-6 py-1  border border-black">
          Pracujme spolu
        </Link>
      </div>
    </Layout>
  )
}
export default Portfolio
