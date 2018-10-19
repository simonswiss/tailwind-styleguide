<template>
  <NavLinksList>
    <NavLink to="/">Welcome</NavLink>
    <NavLink to="/design-tokens">Design Tokens</NavLink>
    <NavLink to="/components">Components</NavLink>
    <NavLink to="/api-demo">API Demo</NavLink>
  </NavLinksList>
</template>

<script>
import NavLinksList from '@/components/navigation/NavLinksList'
import NavLink from '@/components/navigation/NavLink'

export default {
  components: {
    NavLinksList,
    NavLink
  }
}
</script>
