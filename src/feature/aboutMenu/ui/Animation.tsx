import { Style } from './Animation.css';

interface OwnProps {
    selectIdx: number | null;
}

const Animation = ({ selectIdx }: OwnProps) => {
    return (
        <div css={Style}>
            {selectIdx}
            <div className="animation1">애니메이션 1</div>
            <div className="animation2">애니메이션 2</div>
            <div className="animation3">애니메이션 3</div>
        </div>
    );
};

export { Animation };
