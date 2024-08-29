import './SideItem.css'

export const SideItems = ({ title, img, desc }) => {
   return (
      <div className="sideItem">
         <img className="sideItem--img" src={img} alt={title}/>
            <h5 className="sideItem--title">{title}</h5>
            <p className="sideItem--text">{desc}</p>
      </div>
   )
}