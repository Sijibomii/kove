import s from "./gallery.module.scss"

const Gallery = ({ speed }) => {

    return(
        <div className={s.marque__gallery}>
            <div className={s.marque__gallery__container} data-scroll data-scroll-speed={speed} data-scroll-direction="vertical">
                <div className={s.marque__gallery__wrap}>
                    {/* items */}
                    <div className={s.marque__gallery__item}>
                        <figure className={s.marque__gallery__item__media}>
                            <img className={s.marque__gallery__item__media__image} src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                        </figure>
                    </div>

                    <div className={s.marque__gallery__item}>
                        <figure className={s.marque__gallery__item__media}>
                            <img className={s.marque__gallery__item__media__image} src="https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                        </figure>
                    </div>

                    <div className={s.marque__gallery__item}>
                        <figure className={s.marque__gallery__item__media}>
                            <img className={s.marque__gallery__item__media__image} src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    )
}

// https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
// https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
// https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
// https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
export default Gallery;