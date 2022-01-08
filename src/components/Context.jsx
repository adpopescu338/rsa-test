import { createContext, useState, useEffect, useContext } from 'react'

export const QuoteData = createContext()

 const QuoteDataWrapper = ({children}) => {
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
export default QuoteDataWrapper;
export const useData = ()=>useContext(QuoteData)
