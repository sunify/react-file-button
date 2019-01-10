declare module 'react-file-button' {
  export type FileButtonProps = {
    renderButton: (value: string, files: FileList | []) => React.ReactNode;
  };

  const FileButton: React.FC<
    FileButtonProps & React.HTMLProps<HTMLInputElement>
  >;

  export default FileButton;
}
