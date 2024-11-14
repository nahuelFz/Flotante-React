
# Examen: Aplicación de Encuestas en React

## Objetivo

Crear una aplicación de encuestas sencilla utilizando **React**, permitiendo que los usuarios seleccionen respuestas y visualicen resultados básicos. Se utilizarán hooks y otros elementos de React, incluyendo un contexto global para manejar el estado compartido de los resultados.

## Requerimientos Técnicos

La aplicación deberá incluir los siguientes elementos:

- **useState**: Para manejar las respuestas seleccionadas y los resultados.
- **useEffect**: Para cargar los datos de las encuestas desde un archivo JSON.
- **react-router**: Para gestionar la navegación básica entre la lista de encuestas y la página de detalles.
- **useContext**: Para crear un contexto global que almacene y gestione el estado de los resultados de las encuestas.
- **Custom Hook (opcional)**: Si el tiempo lo permite, crear un hook simple para encapsular la lógica de carga de encuestas.

## Pasos Simplificados para el Desarrollo

### 1. Inicialización del Proyecto con Vite
- Crear el proyecto en React con Vite, como se indicó:
  ```bash
  npm create vite@latest encuestas-react-app -- --template react
  ```

### 2. Crear las Rutas con `react-router`
- Configurar **react-router** con dos rutas:
  - `/`: Muestra la lista de encuestas.
  - `/encuesta/:id`: Muestra los detalles de cada encuesta.

### 3. Crear el Contexto Global para los Resultados de Encuestas
- Crear un contexto (`ResultadosContext`) para almacenar el estado global de los resultados.
- Utilizar **useContext** en los componentes donde se acceda y se modifique el estado de resultados.
- Envolver la aplicación en el proveedor de contexto en `App.jsx`.

### 4. Lista de Encuestas (Componente `Encuestas`)
- Utilizar **useState** para manejar la lista y **useEffect** para cargar los datos desde `encuestas.json`.
- Incluir un botón "Ver Encuesta" que redirija a los detalles de cada encuesta usando `useNavigate`.

### 5. Detalles de la Encuesta (Componente `EncuestaDetalle`)
- Usar **useEffect** para cargar las opciones correspondientes a la encuesta seleccionada, con un parámetro de ID en la URL.
- Implementar opciones como botones o radio buttons, y actualizar el estado local con la respuesta seleccionada.
- Actualizar el contexto de resultados usando `useContext` para que los resultados sean accesibles en otros componentes.

### 6. Resultados Simples
- Visualizar una cuenta básica de votos para cada opción utilizando el estado global de resultados en el contexto.

## Requerimientos Funcionales

1. **Lista de encuestas**: Cargar dinámicamente desde `encuestas.json` en la página principal.
2. **Interactividad de resultados**: Al seleccionar una opción, reflejar el resultado actual en el componente de detalles.
3. **Enrutamiento**: Navegar entre la lista y los detalles usando **react-router** y **useNavigate**.
4. **Estado Global**: Gestionar el estado de resultados utilizando **useContext**.
5. **Opcional**: Crear un custom hook (`useEncuestas`) para la lógica de carga de encuestas si se dispone de tiempo adicional.

## Evaluación

1. **Funcionalidad Completa**: Verificar que se carguen las encuestas y que los usuarios puedan seleccionar opciones y ver resultados básicos.
2. **Uso de Hooks y Contexto**: Evaluar el uso correcto de **useState**, **useEffect**, y **useContext**.
3. **Navegación**: Confirmar que el enrutamiento esté bien implementado con **react-router** y **useNavigate**.
4. **Organización del Código**: Estructuración mínima del código en componentes.

## Estructura Simplificada de Carpetas

Se recomienda la siguiente estructura de carpetas para organizar el proyecto:

```
/encuestas-react-app
  /public
    encuestas.json
  /src
    /components
      Encuestas.jsx
      EncuestaDetalle.jsx
    /context
      ResultadosContext.jsx
    /hooks
      useEncuestas.js
    App.jsx
    main.jsx
```

- **/public**: Contiene el archivo `encuestas.json` con los datos de las encuestas.
- **/src**:
  - **/components**: Componentes de la aplicación, como `Encuestas` y `EncuestaDetalle`.
  - **/context**: Archivo para definir y exportar el contexto global de resultados.
  - **/hooks**: Custom hook opcional para manejar la lógica de encuestas.
  - `App.jsx`: Componente principal que gestiona las rutas y el contexto.
  - `main.jsx`: Punto de entrada de la aplicación.

## Instrucciones de Entrega 🚀

1. **Forkea** el repositorio desde [aquí](https://github.com/FabioDrizZt/UCSE-Examen-Flotante-React-Encuestas/fork).
2. **Clona** el repositorio desde [aquí](https://github.com/Tu-Usuario/UCSE-Examen-Flotante-React-Encuestas).
   ```bash
   git clone https://github.com/Tu-Usuario/UCSE-Examen-Flotante-React-Encuestas.git
   ```
3. Desarrolla las funcionalidades requeridas en el repositorio clonado.
4. **Documenta** todos los endpoints en el archivo `README.md`.
5. **Sube** tus cambios y compártelos en el repositorio.
   ```bash
   git add .
   git commit -m "Implementación de x funcionalidad"
   git push origin main
   ```
