export const convertToHtml = (text: string) => {
   return text.replace("/", "</br>");
};
export const convertSpan = (text: string) => {
   // const letter = text.split(' ')[0]
   return text.replace("/", "<span> </br>");
};
export const convert = (text: string) => {
   return text.replace("/", "");
};

export const formatPhoneNumber = (value: string) => {
   // Si el input está vacío, devuelve el valor vacío.
   if (!value) return value;

   // Limpia el input eliminando todo lo que no sean dígitos y limita a 9 caracteres.
   const phoneNumber = value.replace(/[^\d]/g, "").slice(0, 9);

   // Obtén la longitud del número limpio.
   const phoneNumberLength = phoneNumber.length;

   // Si tiene menos de 4 dígitos, devuelve el número sin formato.
   if (phoneNumberLength <= 3) return phoneNumber;

   // Si tiene entre 4 y 6 dígitos, formatea en el estilo "XXX XXX".
   if (phoneNumberLength <= 6) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
   }

   // Si tiene entre 7 y 9 dígitos, formatea como "XXX XXX XXX".
   return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`;
};




export const currency = (num: number) =>
   num.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
   });
export const goToSection = (sectionName: string) => {
   let offsetTop: number = 0;
   if (sectionName !== "/") {
      const section = document.querySelector(`[data-section="${sectionName}"]`) as Element;
      if (!section) {
         console.error(`Section "${sectionName}" not found.`);
         return;
      }
      // offsetTop = section.getBoundingClientRect().top + window.scrollY - +`${sectionName === "/about" ? 80 : 150}`;
      offsetTop = section.getBoundingClientRect().top + window.scrollY - +`${sectionName !== "/" ? 80 : 130}`;
   }

   window.scrollTo({
      behavior: "smooth",
      top: offsetTop,
   });
};

export const limitText = (text: string, numberWords: number): string => {
   const palabras = text.split(" ");

   if (palabras.length <= numberWords) {
      return text;
   }

   const textoLimitado = palabras.slice(0, numberWords).join(" ");
   return textoLimitado;
};

export const FormatDate = (date: string): string => {
   const fecha = new Date(date);
   const fechaFormateada = fecha.toLocaleDateString("EN", {
      month: "long",
      day: "numeric",
      year: "numeric",
   });
   return fechaFormateada;
};
