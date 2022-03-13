<script>
import Layout from "@/views/layouts/main";
import PageHeader from "@/components/page-header";

import Stat from "@/views/pages/dashboard/widget";
import RevenueAnalytics from "@/views/pages/dashboard/revenue";
import SalesAnalytics from "@/views/pages/dashboard/sales-analytics";
import EarningReport from "@/views/pages/dashboard/earning";

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Stat,
    RevenueAnalytics,
    SalesAnalytics,
    EarningReport,
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Nazox",
        },
        {
          text: "Dashboard",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-8">
        <Stat />
        <RevenueAnalytics />
      </div>
      <div class="col-xl-4">
        <SalesAnalytics />
        <EarningReport />
      </div>
    </div>
  </Layout>
</template>
