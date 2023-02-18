import loadingComponentStyle from './LoadingComponent.module.css';

interface Props {
    text?: string;
}

export default function LoadingComponent({ text }: Props) {
    return (
        <div className={loadingComponentStyle.loadingComponentContainer}>
            <div className={loadingComponentStyle.loadingComponentWrapper}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {text && <div className={loadingComponentStyle.loadingComponentText}>{text}</div>}
        </div>
    );
}
