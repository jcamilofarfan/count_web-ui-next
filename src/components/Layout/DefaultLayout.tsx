type Props = {
    children: React.ReactNode,
}
export default function LayoutDefault({children}: Props){
    return (
        <div>
            {children}
        </div>
    )
}