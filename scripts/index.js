import Script from 'next/script';

const ExternalScript = ({ domain, id }) => {
    const scriptContent = `
      (function(d,z,s){
        s.src = 'https://' + d + '/401/' + z;
        try {
          (document.body || document.documentElement).appendChild(s);
        } catch(e) {
          console.error('Error appending script:', e);
        }
      })('${domain}', ${id}, document.createElement('script'));
    `;
  
    return <Script id={id} dangerouslySetInnerHTML={{ __html: scriptContent }} />;
  };
  
  export default ExternalScript;
  