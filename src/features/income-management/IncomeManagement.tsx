import LeaseManagement from './pages/lease-management/LeaseManagement';
import { useLocation } from 'react-router-dom';
import { getViewConfig } from '@/features/income-management/pages/lease-management/config/route-view-config';
import { Box, Text } from '@mantine/core';


/**
 * Wrapper component for displaying a data view based on the current route.
 *
 * Retrieves the current location using `useLocation`, determines the appropriate
 * view configuration with `getViewConfig`, and renders the `DataView` component
 * with the resolved configuration.
 *
 * @returns {JSX.Element} The rendered data view.
 */

function TableViewWrapper() {
  const location = useLocation();
  const config = getViewConfig(location.pathname);

  return (
    <Box>
      <Text fz={36} fw={500} className='text-blue-950 font-roboto-slab'>{config.title}</Text>
      <LeaseManagement config={config} />
    </Box>
  );
}

export default TableViewWrapper;