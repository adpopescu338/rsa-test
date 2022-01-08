import { createContext, useState, useEffect, useContext } from 'react'

const QuoteData = createContext()

export const QuoteDataWrapper = ({children}) => {
   const [ data, setData ] = useState()

	useEffect(() => {
		fetch('https://alex-popescu.co.uk/rsa/getQuote.json')
			.then(r => r.json())
			.then(setData)
			.catch(console.log);
	}, []);

   const removeAddon = (addonToEliminate) => setData({...data, addons: data.addons.filter(({title})=>title!==addonToEliminate.title)})

   const addAddon = (newAddon)=>setData({...data, addons: [...data.addons, newAddon]})
   return (
      <QuoteData.Provider value={{data, removeAddon, addAddon}}>
         {children}
      </QuoteData.Provider>
   )

}

export const useData = ()=>useContext(QuoteData)
