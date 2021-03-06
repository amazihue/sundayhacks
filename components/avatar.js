import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://sundayhacks.org">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }} href="https://sundayhacks.org/">
      <Image
        {...props}
        src="/static/profiles/logonotext.png"
        alt="SundayHacks"
        width={size}
        height={size}
        sx={{
          borderRadius: 'circle',
          overflow: 'hidden',
          bg: 'primary',
          ...props.sx
        }}
      />
    </A>
  </Link>
)
