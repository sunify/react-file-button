declare module 'react-file-button' {
  export type FileButtonProps = {
    renderButton?: (value: string, files: FileList | []) => any;
  } & React.HTMLProps<HTMLInputElement>;

  const FileButton: React.FC<FileButtonProps>;

  export default FileButton;
}
