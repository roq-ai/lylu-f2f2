const mapping: Record<string, string> = {
  businesses: 'business',
  'internet-resources': 'internet_resource',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
