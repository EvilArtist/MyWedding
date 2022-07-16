import LeftToRight from "./SlideEffect/LeftToRight";
import RightToLeft from "./SlideEffect/RightToLeft";
import TopToBottom from "./SlideEffect/TopToBottom";
import BottomToTop from "./SlideEffect/BottomToTop";
import LeftToRightCreate from "./SlideEffect/LeftToRightCreate";
import SatureEffect from "./OpacityEffect/SatureEffect";
import FadeEffect from "./OpacityEffect/FadeEffect";
import RightToLeftCreate from "./SlideEffect/RightToLeftCreate";
import ToCenter from "./SlideEffect/ToCenter";
import ToCenterCreate from "./SlideEffect/ToCenterCreate"; 
import ColumnSlideToRight from "./ColumnEffects/ColumnSlideToRight";
import ColumnSlideToLeft from "./ColumnEffects/ColumnSlideToLeft";
import {ColumnDownToLeft, ColumnDownToRight} from "./ColumnEffects/ColumnDown";

export const count = 12;
export const Column = { 
    SlideToRight: ColumnSlideToRight,
    SlideToLeft: ColumnSlideToLeft,
    DownToLeft: ColumnDownToLeft,
    DownToRight: ColumnDownToRight
};
export const Slide = {
    LeftToRight,
    RightToLeft,
    TopToBottom,
    BottomToTop,
    LeftToRightCreate,
    RightToLeftCreate,
    ToCenter,
    ToCenterCreate,
    
};
export const Opacity = {
    SatureEffect,
    FadeEffect
}

export function Effect(props) {
    const effect = props.effect;

    if (effect === 0) {
        return <Slide.LeftToRight delay={props.delay} duration={props.duration}
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 1) {
        return <Slide.RightToLeft delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 2) {
        return <Slide.TopToBottom delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 3) {
        return <Slide.BottomToTop delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 4) {
        return <Opacity.SatureEffect delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 5) {
        return <Opacity.FadeEffect delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 6) {
        return <Slide.LeftToRightCreate delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 7) {
        return <Slide.RightToLeftCreate delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 8) {
        return <Slide.ToCenter delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 9) {
        return <Slide.ToCenterCreate delay={props.delay} duration={props.duration} 
            images={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 10) {
        return <Column.SlideToRight delay={props.delay} duration={props.duration} 
        images={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else if (effect === 10) {
        return <Column.SlideToRight delay={props.delay} duration={props.duration} 
        images={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else if (effect === 11) {
        return <Column.SlideToLeft delay={props.delay} duration={props.duration} 
        images={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else if (effect === 12) {
        return <Column.DownToLeft delay={props.delay} duration={props.duration} 
        images={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else if (effect === 13){
        return <Column.DownToRight delay={props.delay} duration={props.duration} 
        images={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else {
        return <Column.DownToRight delay={props.delay} duration={props.duration} 
        images={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    }
}