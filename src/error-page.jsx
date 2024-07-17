import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      
      <img src="https://mskuwait.com/wp-content/uploads/2023/04/3d-render-error-404-page-found-your-mockup-design.jpg"/>
   
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}