import { useContext } from "react";
import NotificationContext from "../../../contexts/NotificationContext";
import { NotificationContainer } from "./Notification.styles";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";


function Notification(props) {
    const notificationCtx = useContext(NotificationContext);
    
    const { title, message, status } = props;
    
    let statusClasses = "";
    
    if (status === "success") {
        statusClasses = "success";
    }
    
    if (status === "error") {
        statusClasses = "error";
    }
    
    if (status === "pending") {
        statusClasses = "pending";
    }
    
    const activeClasses = `${ statusClasses }`;
    
    return (
        <NotificationContainer className={ activeClasses } onClick={ notificationCtx.hideNotification }>
            <h2>{ title }</h2>
            <Paragraph>{ message }</Paragraph>
        </NotificationContainer>
    );
}

export default Notification;