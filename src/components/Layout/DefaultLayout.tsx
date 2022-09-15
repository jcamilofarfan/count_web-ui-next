import { LayoutProps } from "../../types/LayoutProps"

export default function LayoutDefault({children}: LayoutProps){
    return (
        <div>
            {children}
        </div>
    )
}