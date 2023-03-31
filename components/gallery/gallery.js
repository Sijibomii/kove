import s from "./gallery.module.scss"

const Gallery = ({ speed , images }) => {

    return(
        <div className={s.marque__gallery}>
            <div className={s.marque__gallery__container} data-scroll data-scroll-speed={speed} data-scroll-direction="vertical">
                <div className={s.marque__gallery__wrap}>
                    {/* items */}
                    <div className={s.marque__gallery__item}>
                        <figure className={s.marque__gallery__item__media}>
                            <img className={s.marque__gallery__item__media__image} src={images[0]}/>
                        </figure>
                    </div>

                    <div className={s.marque__gallery__item}>
                        <figure className={s.marque__gallery__item__media}>
                            <img className={s.marque__gallery__item__media__image} src={images[1]}/>
                        </figure>
                    </div>

                    <div className={s.marque__gallery__item}>
                        <figure className={s.marque__gallery__item__media}>
                            <img className={s.marque__gallery__item__media__image} src={images[2]}/>
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery;