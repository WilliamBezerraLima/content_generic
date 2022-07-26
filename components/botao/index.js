import { Button } from './style'
export default function Botao({children, onClick, className, disabled, link}) {
    return (
        <Button disabled={disabled} className={className} onClick={onClick}>{children}</Button>
        
    )
}