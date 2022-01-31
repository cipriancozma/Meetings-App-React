import "./Meeting.scss";
import {Card} from "../ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

export const Meeting = ({id, image, title, address, description}) => {
    const favoritesContext = useContext(FavoritesContext);

    const itemFavorite = favoritesContext.itemFavorite(id);

    const toogleFavoriteStatus = () => {
        if(itemFavorite) {
            favoritesContext.removeFavorite(id)
        } else {
            favoritesContext.addFavorite({
                id: id,
                title: title,
                description: description,
                image: image,
                address: address
            })
        }
    }

    return (
        <li className={"item"}>
            <Card>
                <div className={"image"}>
                    <img src={image} alt={""} />
                </div>
                <div className={"content"}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={"actions"}>
                    <button onClick={toogleFavoriteStatus}>{itemFavorite ? "Remove from Favorites" : "Be my favorite"}</button>
                </div>
            </Card>
        </li>
    )
}