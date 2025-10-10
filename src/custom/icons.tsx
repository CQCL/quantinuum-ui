import { cn } from "src"

export const StatusIconSuccess = (props: {className?: string}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("size-5 text-green-600", props.className)}>
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
</svg>

}

export const StatusIconError = (props: {className?: string}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("size-5 text-red-600", props.className)}>
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
</svg>


}


export const StatusIconCancelled = (props: {className?: string}) => {
    return<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-5 text-muted-foreground", props.className)}>
<path d="M10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




}

export const StatusIconQueued = (props: {className?: string}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("size-5 text-muted-foreground", props.className)}>
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
</svg>

}

export const StatusIconSubmitted = (props: {className?: string}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("size-5 text-muted-foreground", props.className)}>
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
</svg>


}


export const StatusIconRetrying = (props: {className?: string}) => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-5 text-muted-foreground", props.className)}>
<g clip-path="url(#clip0_4504_53241)">
<path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM12.4424 6.55762C12.1983 6.31354 11.8017 6.31354 11.5576 6.55762C11.3135 6.80169 11.3135 7.19831 11.5576 7.44238L12.4902 8.375H9.0625C8.35591 8.375 7.67431 8.64675 7.16895 9.13672C6.66291 9.62742 6.375 10.2975 6.375 11C6.375 11.3474 6.44544 11.6909 6.58203 12.0107C6.71865 12.3306 6.91852 12.6204 7.16895 12.8633C7.67431 13.3532 8.35591 13.625 9.0625 13.625H10.375C10.7202 13.625 11 13.3452 11 13C11 12.6548 10.7202 12.375 10.375 12.375H9.0625C8.67519 12.375 8.30727 12.2259 8.03906 11.9658C7.90645 11.8372 7.80212 11.685 7.73145 11.5195C7.6609 11.3542 7.625 11.1777 7.625 11C7.625 10.6416 7.77151 10.2936 8.03906 10.0342C8.30727 9.77415 8.67519 9.625 9.0625 9.625H12.4902L11.5576 10.5576C11.3135 10.8017 11.3135 11.1983 11.5576 11.4424C11.8017 11.6865 12.1983 11.6865 12.4424 11.4424L14.4424 9.44238C14.6865 9.19831 14.6865 8.80169 14.4424 8.55762L12.4424 6.55762Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_4504_53241">
<rect width="16" height="16" fill="white" transform="translate(2 2)"/>
</clipPath>
</defs>
</svg>


}









