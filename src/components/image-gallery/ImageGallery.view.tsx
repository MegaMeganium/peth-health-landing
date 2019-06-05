import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  import './image-gallery.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement>{
    slideContent?: { captionHeader?: string, caption?: string }[];
}

interface IState {
    activeIndex: number;
    count: number;
}

class Gallery extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { activeIndex: 0, count: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.animating = false;
    }

    animating: boolean;

    componentDidMount() {
        const count = React.Children.count(this.props.children);
        this.setState({ count });
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        const { count, activeIndex } = this.state;
        if (this.animating) return;
        const nextIndex = activeIndex === count - 1 ? 0 : activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        const { count, activeIndex } = this.state;
        if (this.animating) return;
        const nextIndex = activeIndex === 0 ? count - 1 : activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex: number) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    getSlides() {
        const { children, slideContent = [] } = this.props;

        return React.Children.map(children, (child, index) => {
            const { caption = '', captionHeader = '' } = slideContent![index] || {};
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={`carouselItem-${index}`}
                >
                    {child}
                    <CarouselCaption captionText={caption} captionHeader={captionHeader} />
                </CarouselItem>
            );
        });
    }

    render() {
        const { activeIndex } = this.state;
        const slides = this.getSlides();
        const { children } = this.props;
        const items = React.Children.toArray(children);

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                className={this.props.className}
            >
                <CarouselIndicators items={items as object[]} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

export default Gallery;