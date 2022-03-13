<script>
import Layout from "@/views/layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import moment from "moment";

/**
 * Advanced table component
 */
export default {
  page: {
    title: "Interview oluvchilar ro'yhati",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      interviewerId: "",
      description: "",
      scheduleDate: new Date(),
      tableData: [],
      title: "Interview oluvchilar ro'yhati",
      items: [
        {
          text: "Tables",
          href: "/",
        },
        {
          text: "Advanced",
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      fields: [
        { key: "id", sortable: true },
        { key: "firstName", sortable: true },
        { key: "phone", sortable: true },
        {
          key: "actions",
          label: "Actions",
          formatter: (value) => {
            return moment(value).format("YYYY-MM-DD");
          },
        },
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.tableData.length;
    },
  },
  created() {
    this.getInterviewers();
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    async getInterviewers() {
      try {
        let res = await this.$api("/applicants/interviewers");
        this.tableData = res.data.data.items;
      } catch (err) {
        console.log(err);
      }
    },
    async sendReq() {
      console.log(this.interviewerId);
      try {
        let res = await this.$api.post(
          "/applicants/request",
          {
            interviewerId: this.interviewerId,
            scheduleDate: this.scheduleDate,
            description: this.description,
          },
          {
            Authorization: `Bearer ${"eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiKzk5ODk4OTM2OTAwNzIyIiwiVXNlcklkIjoiMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFwcGxpY2FudCIsImV4cCI6MTY0NzU5NDg5MSwiaXNzIjoid3d3LmRvY3MuZG90LW5ldC51eiIsImF1ZCI6Ind3dy5kb2NzLmRvdC1uZXQudXoifQ.im-9f9dkTj5_fBHZg3yXvAt8roWSuiO5oyPUgnnHqig"}`,
          }
        );
        console.log(res.data.data.items);
      } catch (err) {
        console.log(err);
      }
    },
    info(item, index, button) {
      this.interviewerId = item.item.id;
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ro'yhat</h4>
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select
                      v-model="perPage"
                      size="sm"
                      :options="pageOptions"
                    ></b-form-select
                    >&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div
                  id="tickets-table_filter"
                  class="dataTables_filter text-md-right"
                >
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control form-control-sm ml-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                :items="tableData"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              >
                <template #cell(actions)="row">
                  <b-button
                    class="ml-1"
                    variant="primary"
                    @click="info(row, row, $event.target)"
                  >
                    So'rov jo'natish
                  </b-button>
                </template>
                <template #row-details="row">
                  <b-card>
                    <ul>
                      {{
                        row
                      }}
                    </ul>
                  </b-card>
                </template>
              </b-table>
              <b-modal
                :id="infoModal.id"
                :title="`So'rov jo'natish`"
                hide-footer
              >
                <div>
                  <b-form-group
                    id="example-date-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Muddati"
                    label-for="date-time"
                  >
                    <b-form-input
                      id="date-time"
                      value="2019-08-19T13:45:00"
                      type="datetime-local"
                      v-model="scheduleDate"
                    ></b-form-input>
                  </b-form-group>
                  <div class="form-group mb-4">
                    <label for="billing-address">Izoh</label>
                    <textarea
                      class="form-control"
                      id="billing-address"
                      rows="3"
                      placeholder="Enter full address"
                      v-model="description"
                    ></textarea>
                  </div>
                </div>
                <div class="text-right pt-5 mt-3">
                  <b-button
                    type="submit"
                    variant="primary"
                    @click="sendReq"
                    class="ml-1"
                    >So'rov jo'natish</b-button
                  >
                </div>
              </b-modal>
            </div>
            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-right"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
