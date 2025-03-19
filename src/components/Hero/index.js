import banner_desktop from '../../images/promoImageDesktop2x.jpg';
import banner_mobile from '../../images/promoImageMob2x.jpg';

export default function Hero (){
   
    return (
    <>
        <div className="hero">
            <div className="container">
                <h1 className="hero_text">
                    Congratulations!
                </h1>
                <p className="hero_description">
                    The "Mysterious Sephora Box" contest has started. You have been selected to try new products
                    from well-known brands. For only 65 MXN, you will receive a box full of products that will soon
                    be available in Sephora stores. Limit: one box per customer.
                </p>
            </div>
            <div className="banner-wrapper">
            {banner_mobile && banner_desktop && (
                <picture>
                    <source srcSet={banner_mobile} media="(max-width: 1439px)" />
                    <source srcSet={banner_desktop} media="(min-width: 1440px)" />
                    <img src={banner_desktop} alt="banner" className="banner" />
                </picture>
            )}
                
            </div>
            <div className="container">
                <p className="hero_description small_margin">
                    To receive your Sephora Box, complete the form to confirm that you are a real person.
                </p>
                <p className="hero_description small_margin">
                    Hurry up, the number of prizes is limited!
                </p>
            </div>
        </div>
    </>
    ) 
}

