import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

const HtmlEditor = ({formik}) => {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        formik.setFieldValue('contenido', editorRef.current.getContent())
      }
    };
    return (
      <>
        <Editor
          apiKey='xyanamjrbqx8p8ulm81u98pzxecjoar36sfst6y8jwjdxb34'
          onInit={(_evt, editor) => editorRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 300,
            menubar: 'file edit insert view',
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={log}  className="btn btn-primary">Crear</button>
      </>
    );
}

export default HtmlEditor