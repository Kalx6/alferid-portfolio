export default function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14 ${className}`}>
      {children}
    </Tag>
  )
}