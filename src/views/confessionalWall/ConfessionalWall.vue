<template>
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text">
              Form：{{ Form }}
            </v-card-title>
            <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-text>


            <v-card-actions style="text-align: right">
              <v-spacer></v-spacer>
              <div style="float:right;">
                <h5 style="text-align: right">TO：{{ To }}</h5>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card  theme="dark">
            <v-card-title class="text">
              Form：{{ Form }}
            </v-card-title>
            <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-text>


            <v-card-actions style="text-align: right">
              <v-spacer></v-spacer>
              <div style="float:right;">
                <h5 style="text-align: right">TO：{{ To }}</h5>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card  theme="dark">
            <v-card-title class="text">
              Form：{{ Form }}
            </v-card-title>
            <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-text>


            <v-card-actions style="text-align: right">
              <v-spacer></v-spacer>
              <div style="float:right;">
                <h5 style="text-align: right">TO：{{ To }}</h5>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card  theme="dark">
            <v-card-title class="text">
              Form：{{ Form }}
            </v-card-title>
            <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-text>


            <v-card-actions style="text-align: right">
              <v-spacer></v-spacer>
              <div style="float:right;">
                <h5 style="text-align: right">TO：{{ To }}</h5>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ConfessionalWall",
  data() {
    return {
      Form: '李永辉',
      To: 'czy',
    }
  },
}
</script>

<style scoped>

</style>
