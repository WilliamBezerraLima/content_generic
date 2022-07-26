import { Element } from './style'
export default function Link({children, className, disabled, link}) {
    return (
        <Element href={link} target='_blank' rel='nofollow noopener' disabled={disabled} className={className}>{children}</Element>  
    )
}