import Marquee from "react-fast-marquee";
import CardWidget from "./CardWidget";

export default function MarqueeWidget() {
    return (
        <Marquee autoFill={true} pauseOnHover={true} gradientColor={[255, 255, 255]} gradientWidth={300}>
            <CardWidget />
        </Marquee>
    )
}