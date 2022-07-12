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