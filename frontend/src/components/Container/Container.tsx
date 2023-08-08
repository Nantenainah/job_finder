interface Props {
    children: React.ReactNode;
}
function Container(props: Props) {
    const { children } = props;
    return <div className="mx-5 md:container md:mx-auto">{children}</div>;
}

export default Container;
