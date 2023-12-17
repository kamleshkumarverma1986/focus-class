import Marquee from "react-fast-marquee";
import CardWidget from "./CardWidget";

const MarqueeWidget = () => {
    return (
        <Marquee autoFill={true} pauseOnHover={true} gradientColor={[255, 255, 255]} gradientWidth={300}>
            <CardWidget />
            <CardWidget />
            <CardWidget />
            <CardWidget />
            <CardWidget />
        </Marquee>
    )
}

export default MarqueeWidget;