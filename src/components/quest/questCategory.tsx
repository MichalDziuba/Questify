type Props = {
    category:string
}


export const QuestCategory = ({ category }: Props) => {
    let backgroundStyle;
       if (category === "stuff") {
         backgroundStyle = "bg-[#B9C3C8]";
       }
       if (category === "family") {
         backgroundStyle = "bg-[#FFE6D3]";
       }
       if (category === "health") {
         backgroundStyle = "bg-[#CDF7FF]";
       }
       if (category === "learning") {
        backgroundStyle = "bg-[#FFF6C0]";
       }
       if (category === "leisure") {
         backgroundStyle = "bg-[#F8D2FF]";
       }
       if (category === "work") {
         backgroundStyle = "bg-[#D3F6CE]"
       }


    return (
        <div className={`${backgroundStyle} w-32 rounded-r-xl flex items-center justify-center p-[1px]`}>
            <p className="text-lg font-Montserrat">
              {category.toUpperCase()}  
            </p>

        </div>
    )
}