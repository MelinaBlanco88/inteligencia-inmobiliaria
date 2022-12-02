import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const Whatsapp = () => {
	return (
		<>
			<FloatingWhatsApp
				phoneNumber="+52 44 2138 4813"
				accountName="Liz Medélez"
				statusMessage="Disponible"
				placeholder="Escriba su mensaje"
				chatMessage="¡Hola! Cuéntanos en que podemos ayudarte."
				avatar="./liz.png"
				allowEsc
				allowClickAway
				notification
				notificationSound
			/>
		</>
	);
};